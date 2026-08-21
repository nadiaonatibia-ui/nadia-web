-- ============================================
-- Políticas RLS para contact_messages
-- ============================================

-- Permite que CUALQUIERA (incluso visitantes anónimos del formulario)
-- pueda INSERTAR un mensaje de contacto. Esto es necesario para que
-- el formulario público funcione.
CREATE POLICY "Cualquiera puede enviar un mensaje de contacto"
ON contact_messages
FOR INSERT
TO anon
WITH CHECK (true);

-- Permite que SOLO Nadia (usuario autenticado) pueda LEER los mensajes
-- recibidos, para el panel de admin. Los visitantes anónimos NO pueden
-- leer mensajes de otros.
CREATE POLICY "Solo usuarios autenticados pueden leer mensajes"
ON contact_messages
FOR SELECT
TO authenticated
USING (true);


-- ============================================
-- Políticas RLS para blog_posts
-- ============================================

-- Lectura pública de posts publicados (published = true).
-- Los borradores no se muestran a nadie que no esté autenticado.
CREATE POLICY "Cualquiera puede leer posts publicados"
ON blog_posts
FOR SELECT
TO anon
USING (published = true);

-- Nadia (autenticada) puede leer TODO, incluidos borradores.
CREATE POLICY "Usuarios autenticados pueden leer todos los posts"
ON blog_posts
FOR SELECT
TO authenticated
USING (true);

-- Solo Nadia (autenticada) puede crear/editar posts desde el admin.
CREATE POLICY "Usuarios autenticados pueden insertar posts"
ON blog_posts
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Usuarios autenticados pueden editar posts"
ON blog_posts
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);


-- ============================================
-- Políticas RLS para cv_content
-- ============================================

-- Lectura pública del CV (es contenido que se muestra en la web a todos).
CREATE POLICY "Cualquiera puede leer el CV"
ON cv_content
FOR SELECT
TO anon
USING (true);

-- Solo Nadia (autenticada) puede editar el CV.
CREATE POLICY "Usuarios autenticados pueden editar el CV"
ON cv_content
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);
